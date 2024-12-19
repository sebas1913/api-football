import { TrophieService } from '@/app/infrastructure/services/trophies.service';
import { NextResponse } from 'next/server';

export async function GET() {
    const service = new TrophieService();
    const playerId = "";

    try {
        const response = await service.findById(playerId);
        return NextResponse.json(response, {status: 200});
    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json({message: 'Error'}, {status: 500})
    }
}
