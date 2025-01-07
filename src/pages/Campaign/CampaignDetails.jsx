import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const CampaignDetails = () => {
    const campaign = useLoaderData();
    const { user } = useContext(AuthContext);
    const {
        title,
        type,
        description,
        minDonation,
        deadline,
        email,
        username,
        image,
    } = campaign || {};

    const handleDonate = () => {
        const donation = {
            campaignId: campaign._id,
            title,
            type,
            description,
            minDonation,
            deadline,
            campaignEmail: email,
            campaignUsername: username,
            userEmail: user?.email,
            userName: user?.displayName,
        };
        fetch("https://innofund-server.vercel.app/donated", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donation),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Donation Successful!");
                }
            })
            .catch((error) => {
                console.error("Error donating:", error);
                toast.error("Failed to donate. Please try again later.");
            });
    };
    return (
        <div className="container mx-auto mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6">{title}</h1>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover mb-6 rounded-lg"
                />
                <p className="text-lg mb-4">
                    <strong>Type:</strong> {type}
                </p>
                <p className="text-lg mb-4">
                    <strong>Description:</strong> {description}
                </p>
                <p className="text-lg mb-4">
                    <strong>Minimum Donation:</strong> {minDonation}
                </p>
                <p className="text-lg mb-4">
                    <strong>Deadline:</strong> {deadline}
                </p>
                <p className="text-lg mb-4">
                    <strong>Email:</strong> {email}
                </p>
                <p className="text-lg mb-4">
                    <strong>Username:</strong> {username}
                </p>
                <button
                    onClick={handleDonate}
                    className="btn btn-outline btn-secondary mt-4"
                >
                    Donate
                </button>
            </div>
        </div>
    );
};

export default CampaignDetails;