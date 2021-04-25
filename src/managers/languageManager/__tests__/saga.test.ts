import watchLanguageManager, * as saga from '../saga';
import { takeEvery, select, put, call } from 'redux-saga/effects';
import * as logic from '../../../buisnessLogic';
import { changeLanguage } from '../../../lang/localization';

describe('languageManager saga', () => {
    describe('watchLangugageManager', () => {
        const generator = watchLanguageManager();

        it('should takeEvery handleChangeLanguage', () => {
            expect(generator.next().value).toEqual(takeEvery('change_language_store', saga.handleChangeLanguage))
        });

        it('should finished', () => {
            expect(generator.next().done).toBeTruthy();
        });
    });

    describe('handleChangeLanguage try', () => {
        it('should call changeLanguage', () => {
            const action = {
                type: 'change_language_store',
                payload: 'ru'
            };
            const generator = saga.handleChangeLanguage(action);

            // @ts-ignore
            expect(generator.next().value).toEqual(call(changeLanguage, action.payload))
        });

        it('should finished when action do not have payload', () => {   
            const action = {
                type: 'change_language_store',
            };
            // @ts-ignore
            const generator = saga.handleChangeLanguage(action);

            expect(generator.next().done).toBeTruthy();
        });
    });
});
