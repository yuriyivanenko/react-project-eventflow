const convert24HourToLocale = (time24: any) => {
  const [hours, minutes] = time24.split(":").map(Number)
  const date = new Date()
  date.setHours(hours)
  date.setMinutes(minutes)
  const timeLocale = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })
  return timeLocale
}

const convertDateFormat = (dateString: string) => {
  const [year, month, day] = dateString.split("-")
  return `${parseInt(month)}/${parseInt(day)}/${year}`
}

const convertDateTime = (formData: any) => {
  return {
    ...formData,
    date: convertDateFormat(formData.date),
    time: convert24HourToLocale(formData.time),
  }
}

export default convertDateTime
