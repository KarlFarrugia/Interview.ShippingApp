import { Action, Reducer } from 'redux';
import {CreateParcelState} from '../helpers';

const INITIAL_STATE = CreateParcelState(0,0,0,0);

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ParcelState {
    depth: number;
    height: number;
    width: number;
    weight: number;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface SetParcelCountAction { type: 'SET_PARCEL', payload: ParcelState }
export interface ClearParcelCountAction { type: 'CLEAR_PARCEL' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = SetParcelCountAction | ClearParcelCountAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    set_parcel: (parcel: ParcelState) => ({ type: 'SET_PARCEL', payload: parcel } as SetParcelCountAction),
    clear_parcel: () => ({ type: 'CLEAR_PARCEL' } as ClearParcelCountAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<ParcelState> = (state: ParcelState | undefined, incomingAction: Action): ParcelState => {
    if (state === undefined) {
        return INITIAL_STATE;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SET_PARCEL':
            return action.payload;
        case 'CLEAR_PARCEL':
            return INITIAL_STATE;
        default:
            return state;
    }
};
