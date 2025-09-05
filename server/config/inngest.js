const { Inngest } = require("inngest");
const connectDB = require("./db");
const User = require("../models/user.model");

// Create a client to send and receive events
const inngest = new Inngest({ id: "Slack Clone" });

// Function to sync with Clerk and create a user in your database
const syncUser = inngest.createFunction(
    { id: "sync-user" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        await connectDB(); // Ensure DB is connected

        const { id, email_addresses, first_name, last_name, image_url } = event.data; // Destructure user data from the event

        const newUser = {
            clerkId: id,
            email: email_addresses[0]?.email_address || "",
            name: `${first_name} ${last_name}`.trim() || "No Name",
            image: image_url || "",
        } // Prepare user data

        await User.create(newUser); // Create user in the database
        console.log("Syncing user:", newUser);
    }
)

// Function to delete user from your database when deleted from Clerk
const deleteUser = inngest.createFunction(
    { id: "delete-user-from-db" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        await connectDB(); // Ensure DB is connected
        const { id } = event.data; // Destructure user ID from the event
        await User.deleteOne({ clerkId: id }); // Delete user from the database
        console.log("Deleted user with Clerk ID:", id);
    }
)

// Create an empty array where we'll export future Inngest functions
const functions = [ syncUser, deleteUser ];

module.exports = { inngest, functions };