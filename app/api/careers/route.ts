
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const career = await prisma.career.create({
            data: {
                title: body.title,
                slug: body.slug,
                location: body.location,
                jobType: body.jobType,
                experience: body.experience,
                salary: body.salary,
                description: body.description,
                requirements: body.requirements,
                responsibilities: body.responsibilities,
            },
        });

        return NextResponse.json(career);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create career" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const careers = await prisma.career.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(careers);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch careers" }, { status: 500 });
    }
}
