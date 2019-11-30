import { PersonObject } from 'webex';
import { ADD_PERSON, LOAD_PERSON_BY_ID } from '../constants';

export const addPerson = (id: string, person: PersonObject) => ({ type: ADD_PERSON, payload: { id, person } });

export const loadPersonByID = (id: string) => ({ type: LOAD_PERSON_BY_ID, payload: { id } });
