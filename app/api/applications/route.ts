
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { careerId, fullName, email, phone, resumeUrl } = body;

        const application = await prisma.careerApplication.create({
            data: {
                careerId,
                fullName,
                email,
                phone,
                resumeUrl,
            },
        });

        return NextResponse.json(application);
    } catch (error) {
        console.error("Application error:", error);
        return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const applications = await prisma.careerApplication.findMany({
            include: {
                career: {
                    select: {
                        title: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(applications);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
    }
}
