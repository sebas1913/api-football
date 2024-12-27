import { NextResponse } from 'next/server';
import { PlayerService } from '@/app/infrastructure/services/players.service';

export async function GET(request: Request){
    const service = new PlayerService();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') ;

    try {
        const response = await service.find(search!);
        return NextResponse.json(response, {status: 200});
        
    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json({message: 'Error'}, {status: 500})
    }
}