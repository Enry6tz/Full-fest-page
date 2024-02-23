"use client"
import { useState, useEffect } from 'react'

interface Track {
    track: {
      id: string;
      name: string;
      
    };
  }

export function SpotySection() {

    const [playlistData, setPlaylistData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Reemplaza 'TU_CLIENT_ID' y 'TU_CLIENT_SECRET' con tus propias credenciales de Spotify
                const clientId = 'TU_CLIENT_ID';
                const clientSecret = 'TU_CLIENT_SECRET';

                // Obtén el token de acceso de Spotify utilizando fetch
                const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
                    },
                    body: 'grant_type=client_credentials',
                });

                const tokenData = await tokenResponse.json();
                const accessToken = tokenData.access_token;

                // Usa el token de acceso para obtener la información de la playlist utilizando fetch
                const playlistResponse = await fetch(
                    'https://api.spotify.com/v1/playlists/TU_ID_DE_PLAYLIST',
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                const playlistData = await playlistResponse.json();
                setPlaylistData(playlistData.tracks.items);
            } catch (error) {
                console.error('Error al obtener la playlist', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
        <h2>Playlist de Spotify</h2>
        <ul>
          {playlistData.map((item) => (
            <li key={item.track.id}>{item.track.name}</li>
          ))}
        </ul>
      </div>
    );
    
}
