
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await prisma.career.delete({
            where: { id },
        });
        return NextResponse.json({ message: "Career deleted" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete career" }, { status: 500 });
    }
}
