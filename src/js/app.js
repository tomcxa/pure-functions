/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
export function colorHealthIndicator(player) {
    if (player.health > 50) {
        return 'healthy';
    }
    if (player.health < 15) {
        return 'critical';
    }
    return 'wounded';
}
