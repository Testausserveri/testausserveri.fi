export class TimeUtil {
    static Multipliers = {
        SECOND: 1,
        MINUTE: 60,
        HOUR: 60 * 60,
        DAY: 60 * 60 * 24,
        WEEK: 60 * 60 * 24 * 7,
        MONTH: 60 * 60 * 24 * 30,
    };

    static Suffixes = {
        SECONDS: "s",
        MINUTES: "m",
        HOURS: "h",
        DAYS: "d ",
        WEEKS: "wks",
    };

    static MonthNames = [
        'tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta',
        'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta',
        'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'
    ];

    static WeekdayNames = [
        'sunnuntai', 'maanantai', 'tiistai', 'keskiviikko',
        'torstai', 'perjantai', 'lauantai'
    ];

    /**
     * Format seconds into a readable string
     */
    static formatSecond(seconds: number) {
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
                ({
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
                    {
                        let suffixKey: keyof typeof this.Suffixes = u.toUpperCase() as keyof typeof this.Suffixes;
                        return `${v} ${v >= 1
                            ? this.Suffixes[suffixKey].trim()
                            : this.Suffixes[suffixKey].substring(
                                0,
                                this.Suffixes[suffixKey].length - 1
                            )}`;
                    }
                )
                .join(" ") || "0 secs"
        );
    }

    // Helper function to format the date as "d. mmmm." or "d. mmmm yyyy."
    static formatFinnishDate = (date: Date): string => {
        const day = date.getDate();
        const month = this.MonthNames[date.getMonth()];
        const year = date.getFullYear();
        const currentYear = new Date().getFullYear();
        
        if (year === currentYear) {
            return `${day}. ${month}`;
        } else {
            return `${day}. ${month} ${year}`;
        }
    };

    /**
     * Format date into a readable string in relation to the current date
     */
    
    static formatDateInRelationToCurrent(date: Date): string {
        const now = new Date();
    
        // Helper function to get the difference in calendar days
        const differenceInCalendarDays = (date1: Date, date2: Date): number => {
            const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
            const diffDays = Math.round((date1.getTime() - date2.getTime()) / oneDay);
            return diffDays;
        };
    
        // Helper function to get the weekday name in Finnish
        const getFinnishWeekdayName = (date: Date): string => {
            return this.WeekdayNames[date.getDay()];
        };
    
        const daysDifference = differenceInCalendarDays(now, date);
    
        if (daysDifference === 0) {
            return 'tänään';
        }
        
        if (daysDifference === 1) {
            return 'eilen';
        }
    
        if (daysDifference === 2) {
            return 'toissa päivänä';
        }
    
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay() + 1); // Assuming week starts on Monday
    
        if (date >= startOfWeek && date <= now) {
            const weekdayName = getFinnishWeekdayName(date);
            return `${weekdayName}na`;
        }
    
        return this.formatFinnishDate(date);
    }
}
