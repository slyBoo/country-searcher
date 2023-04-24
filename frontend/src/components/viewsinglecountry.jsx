import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { CircularProgress, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


function SingleCountry() {
    const { id } = useParams()
    const [isLoaded, setIsLoaded] = useState(false);
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        // our code goes here
        fetch(`http://127.0.0.1:8000/countries/${id}/`)
            .then(response => {
                if (response.status === 404) {
                    navigate('/notfound', { replace: true });
                    return null;
                } else {
                    return response.json()
                }
            })
            .then(data => {
                console.log(data[0])
                setCountry(data[0]) // get the array of text out and set it as our state
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }
        , [id, navigate])
    const displayCountry = () => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '50px',
                    mb: '2rem'
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {country.name.common}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#F6F6F6',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
                        maxWidth: '600px',
                        width: '100%',
                    }}
                >
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Capital: {country.capital}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                            Region:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {country.region}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                            Language(s):
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {Object.values(country.languages).join(", ")}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                            Population:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {country.population}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                            Area:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {`${country.area}km²`}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                            Timezones:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {country.timezones.join(", ")}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                            Borders:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {country.borders.join(", ")}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                            Flag:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {country.flag}
                        </Typography>
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}> Flag </Typography>
                    <img src={country.flags.png} alt="Flag" />
                </Box>
            </Box>
        );
    }
    if (isLoaded) {
        return (
            <div>
                {displayCountry()}
            </div>
        )
    }
    else {
        return (
            <CircularProgress size="100"/>
        )
    }
}

export default SingleCountry;
