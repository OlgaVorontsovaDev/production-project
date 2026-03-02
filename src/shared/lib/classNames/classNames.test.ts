import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expectedResult = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expectedResult,
        );
    });

    test('with mods', () => {
        const expectedResult = 'someClass class1 class2 hovered selected';
        expect(classNames(
            'someClass',
            { hovered: true, selected: true },
            ['class1', 'class2'],
        ))
            .toBe(
                expectedResult,
            );
    });

    test('with falsy mods', () => {
        const expectedResult = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, selected: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expectedResult);
    });

    test('with undefined mods', () => {
        const expectedResult = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, selected: undefined }, [
                'class1',
                'class2',
            ]),
        ).toBe(expectedResult);
    });
});
