import React from 'react';

import {Modal} from "@material-ui/core";

const FullAudio = () => {
    return (
        <Modal open={true}>
            <div className="fullAudio">

                <ul className="fullAudio__list"></ul>
                <div className="fullAudio__controls">

                </div>
            </div>
        </Modal>

    );
};

export default FullAudio;