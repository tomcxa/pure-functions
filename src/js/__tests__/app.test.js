import { colorHealthIndicator } from '../app';

test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'Маг', health: 45 }, 'wounded'],
    [{ name: 'Маг', health: 10 }, 'critical'],
])(
    ('выводим инфу по хпешечке'), (player, expected) => {
        const result = colorHealthIndicator(player);

        expect(result).toBe(expected);
    },
);
