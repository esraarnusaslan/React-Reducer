import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useStore } from '../../store';
import { counterDown, counterUp } from '../../store/counter/Counter-Actions';

const Counter = () => {
    const { counterState, counterDispatch } = useStore();

    return (
        <ButtonGroup aria-label="Basic example">
            <Button
                variant="secondary"
                onClick={() => counterDispatch(counterDown(1))}
            >
                -
            </Button>
            <Button variant="secondary" disabled>
                {counterState.count}
            </Button>
            <Button
                variant="secondary"
                onClick={() => counterDispatch(counterUp(1))}
            >
                +
            </Button>
        </ButtonGroup>
    );
};

export default Counter;
