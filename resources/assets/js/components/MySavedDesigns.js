import React from 'react';
import { render } from 'react-dom';
import CssBaseline from 'material-ui/CssBaseline';
import Button from 'material-ui/Button';

const MySavedDesigns = () => {

    return (
        <React.Fragment>

            <CssBaseline />

            <Button variant="raised" color="primary">
                Hello World
            </Button>

        </React.Fragment>
    );

}

export default MySavedDesigns

render(<MySavedDesigns />, document.getElementById('root'))