import React, { useEffect, useState } from 'react'
import '../components/post.css'

import HEADER from '../components/header'
import FOOTER from '../components/footer'

function Post() {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        getJuegos()
    }, []);
    return (
        <>
            <HEADER />
            <div className="tableFixHead">
                <table className="table" >
                    <thead >
                        <tr>
                            <th scope="col">
                                Titulo
                            </th>
                            <th scope="col">
                                Plataforma
                            </th>
                            <th scope="col">
                                Género
                            </th>
                            <th scope="col">
                                Editora
                            </th>
                            <th scope="col">
                                Desarrolladora
                            </th>
                            <th scope="col">
                                Id
                            </th>
                            <th scope="col">
                                Url
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            datos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td><a href="/">{item.title}</a></td>
                                        <td>{item.platform}</td>
                                        <td>{item.genre}</td>
                                        <td>{item.publisher}</td>
                                        <td>{item.developer}</td>
                                        <td>{item.id}</td>
                                        <td>{item.game_url}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <FOOTER />
        </>
    )

    function getJuegos() {
        consultar().then((value) => {
            setDatos(value);

            console.log(value);
        })
    }


    async function consultar() {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date`, {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "e755907b5cmsh450516ead14326cp10d7f9jsn020231a45891"
            }
        })
        const json = await response.json();
        return json
    }
}

export default Post


