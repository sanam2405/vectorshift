import { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Button,
} from '@mui/material';
import axios from 'axios';

const endpointMapping = {
    'Notion': 'notion',
    'Airtable': 'airtable',
};

export const DataForm = ({ integrationType, credentials }) => {
    const [loadedData, setLoadedData] = useState(null);
    const endpoint = endpointMapping[integrationType];

    const handleLoad = async () => {
        try {
            const formData = new FormData();
            formData.append('credentials', JSON.stringify(credentials));
            const response = await axios.post(`http://localhost:8000/integrations/${endpoint}/load`, formData);
            const data = response.data;
            // console.log(data);
            setLoadedData(data);
        } catch (e) {
            alert(e?.response?.data?.detail);
        }
    };

    useEffect(() => {
    handleLoad();
}, []); // Run once on component mount


// A string representation for each object in loadedData
const dataString =
  loadedData && loadedData.length > 0
    ? loadedData.map((item) => `ID: ${item.id || ''}\nName: ${item.name || ''}`).join('\n------------------------------------------------------\n')
    : '';

    return (
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' width='100%'>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' width='100%'>
                <TextField
                    label="Loaded Data"
                    multiline
                    value={dataString || ''}
                    sx={{
                        mt: 2, 
                        width: '50%'
                    }}
                    InputLabelProps={{ shrink: true }}
                    disabled
                />
                <Button
                    onClick={handleLoad}
                    sx={{
                        mt: 2,
                        width: '10%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    variant='contained'
                >
                    Load Data
                </Button>
                <Button
                    onClick={() => setLoadedData(null)}
                    sx={{
                        mt: 1,
                        width: '10%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    variant='contained'
                >
                    Clear Data
                </Button>
            </Box>
        </Box>
    );
}
