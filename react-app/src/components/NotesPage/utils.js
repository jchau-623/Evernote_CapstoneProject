export const timePassed = (milliseconds) => {

    const second = 1000
    const minute = 60 * second
    const hour = 60 * minute

    const pastSecond = Math.floor((milliseconds % minute) / second)
    const pastMinute = Math.floor((milliseconds % hour) / minute)
    const pastHour = Math.floor((milliseconds / hour))
    const pastDay = Math.floor(pastHour / 24)

    if (pastSecond <= 60 && pastMinute === 0 && pastHour === 0 && pastDay === 0) return `< 1m`;
    if (pastMinute <= 60 && pastHour === 0 && pastDay === 0) return `${pastMinute}m`;
    if (pastHour <= 60 && pastDay === 0) return `${pastHour}h`;
    if (pastDay >= 2 || pastHour > 24) return `${pastDay}d`;

}
