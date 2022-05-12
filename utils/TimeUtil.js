/**
 * https://github.com/Testaustime/testaustime-bot/blob/dcace5da793eeec3d61f36e6a768d993a87f61e2/src/lib/TimeUtil.js
 */

export class TimeUtil {
    /**
     * @property {number} SECOND
     * @property {number} MINUTE
     * @property {number} HOUR
     * @property {number} DAY
     * @property {number} WEEK
     */
    static Multipliers = {
        SECOND: 1,
        MINUTE: 60,
        HOUR: 60 * 60,
        DAY: 60 * 60 * 24,
        WEEK: 60 * 60 * 24 * 7,
        MONTH: 60 * 60 * 24 * 30,
    };

    /**
     * @property {string} SECONDS
     * @property {string} MINUTES
     * @property {string} HOURS
     * @property {string} DAYS
     * @property {string} WEEKS
     */
    static Suffixes = {
        SECONDS: "s",
        MINUTES: "m",
        HOURS: "h",
        DAYS: "d ",
        WEEKS: "wks",
    };

    /**
     * Format seconds into a readable string
     * @param {number} seconds
     * @returns {string} formatted string
     */
    static formatSecond(seconds) {
        const weeks = Math.floor(seconds / this.Multipliers.WEEK);
        seconds -= weeks * this.Multipliers.WEEK;

        const days = Math.floor(seconds / this.Multipliers.DAY);
        seconds -= days * this.Multipliers.DAY;

        const hours = Math.floor(seconds / this.Multipliers.HOUR);
        seconds -= hours * this.Multipliers.HOUR;

        const minutes = Math.floor(seconds / this.Multipliers.MINUTE);
        seconds -= minutes * this.Multipliers.MINUTE;

        return (
            Object.entries(
                /** @type {Record<string, number>} */ ({
                    weeks,
                    days,
                    hours,
                    minutes,
                })
            )
                .filter((t) => Boolean(t[1]))
                .slice(0, 3) // Let's only care about the 3 largest units
                .map(
                    ([u, v]) =>
                        `${v} ${
                            v >= 1
                                ? this.Suffixes[u.toUpperCase()].trim()
                                : this.Suffixes[u.toUpperCase()].substring(
                                      0,
                                      this.Suffixes[u.toUpperCase()].length - 1
                                  )
                        }`
                )
                .join(" ") || "0 secs"
        );
    }
}
