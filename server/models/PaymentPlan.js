import mongoose from "mongoose";

const paymentPlanSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        planType: {
            type: String,
            enum: ["Basic", "Standard", "Premium"], // You can modify these plan types
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ["Pending", "Completed", "Failed"],
            default: "Pending",
        },
        expiresAt: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

const PaymentPlan = mongoose.model("PaymentPlan", paymentPlanSchema);
export default PaymentPlan;

