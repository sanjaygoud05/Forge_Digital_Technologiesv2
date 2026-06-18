
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

        return NextResponse.json(submission);
    } catch (error) {
        console.error("Contact submission error:", error);
        return NextResponse.json({ error: "Failed to submit message" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const submissions = await prisma.contactSubmission.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(submissions);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
    }
}
