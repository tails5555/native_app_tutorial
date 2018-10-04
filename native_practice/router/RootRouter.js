import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import HomeScene from '../container/HomeScene';

const RootRouter = () => (
    <Router>
        <Stack key="root">
            <Scene key="index" component={HomeScene} title="HOME" />
        </Stack>
    </Router>
)

export default RootRouter;