import { Box } from '@material-ui/core';
import LoadingButton from '@material-ui/lab/LoadingButton';

const ButtonComponent = ({ text, buttonLoad, isSubmitting }) => {
    return (
        <Box sx={{ mt: 2 }}>
            <LoadingButton
                loading={buttonLoad}
                loadingPosition="start"
                variant="outlined"
                color="primary"                
                size="large"
                type="submit"
                variant="contained"
            >
                {text}
            </LoadingButton>
        </Box>
    )

};

export default ButtonComponent;
