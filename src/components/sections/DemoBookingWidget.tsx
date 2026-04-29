"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Video, Calendar, Check, Sparkles } from "lucide-react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { cn } from "@/lib/utils"

const TIME_SLOTS = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"]
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function getNextBusinessDays(count: number): Date[] {
  const days: Date[] = []
  const cursor = new Date()

  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1)
    if (cursor.getDay() !== 0 && cursor.getDay() !== 6) {
      days.push(new Date(cursor))
    }
  }

  return days
}

function getTimezoneLabel(zone: string): string {
  try {
    const formatter = new Intl.DateTimeFormat(undefined, {
      timeZone: zone,
      timeZoneName: "shortOffset",
    })
    const parts = formatter.formatToParts(new Date())
    const offset = parts.find((part) => part.type === "timeZoneName")?.value || "UTC"
    return `${zone} (${offset})`
  } catch {
    return zone
  }
}

interface DemoBookingWidgetProps {
  onSlotSelected?: (slot: string, timezone: string) => void
  embedded?: boolean
}

export function DemoBookingWidget({ onSlotSelected, embedded = false }: DemoBookingWidgetProps) {
  const [days, setDays] = React.useState<Date[]>([])
  const [selectedDay, setSelectedDay] = React.useState<number | null>(null)
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null)
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [organization, setOrganization] = React.useState("")
  const [honeypot, setHoneypot] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isBooked, setIsBooked] = React.useState(false)
  const [submitError, setSubmitError] = React.useState("")
  const [timezone, setTimezone] = React.useState("UTC")
  const { executeRecaptcha } = useGoogleReCaptcha()

  React.useEffect(() => {
    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
    setTimezone(detectedTimezone)
    setDays(getNextBusinessDays(5))
  }, [])

  function formatSlot(dayIdx: number, time: string): string {
    const day = days[dayIdx]
    return `${DAY_NAMES[day.getDay()]}, ${MONTH_NAMES[day.getMonth()]} ${day.getDate()} · ${time}`
  }

  function formatDayOnly(dayIdx: number): string {
    const day = days[dayIdx]
    return `${DAY_NAMES[day.getDay()]}, ${MONTH_NAMES[day.getMonth()]} ${day.getDate()}, ${day.getFullYear()}`
  }

  function handleDaySelect(dayIdx: number) {
    setSelectedDay(dayIdx)
    setSelectedTime(null)
    onSlotSelected?.("", timezone)
  }

  function handleTimeSelect(time: string) {
    setSelectedTime(time)
    if (selectedDay !== null) {
      onSlotSelected?.(formatSlot(selectedDay, time), timezone)
    }
  }

  const allFilled =
    selectedDay !== null &&
    selectedTime !== null &&
    name.trim().length >= 2 &&
    /\S+@\S+\.\S+/.test(email) &&
    organization.trim().length >= 2

  async function handleConfirmBooking() {
    if (embedded || !allFilled || isSubmitting || selectedDay === null || !selectedTime) return

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const recaptchaToken = executeRecaptcha
        ? await executeRecaptcha("demo_booking")
        : ""

      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          organization: organization.trim(),
          day: formatDayOnly(selectedDay),
          time: selectedTime,
          timezone,
          recaptchaToken,
          website: honeypot,
        }),
      })

      if (!response.ok) {
        throw new Error("booking_failed")
      }

      setIsBooked(true)
    } catch {
      setSubmitError("Couldn't confirm your booking. Please try again or email contact@azentyk.ai.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedSlotLabel =
    selectedDay !== null && selectedTime
      ? formatSlot(selectedDay, selectedTime)
      : null

  const timezoneLabel = getTimezoneLabel(timezone)

  return (
    <div className="relative border-gradient p-[1px] rounded-3xl h-full">
      <div className="bg-bg-secondary/70 backdrop-blur-2xl rounded-[23px] p-8 h-full flex flex-col gap-7 overflow-hidden">
        {!embedded && isBooked ? (
          <div className="relative flex-1 flex flex-col items-center justify-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-violet/20 border border-accent-primary/30 flex items-center justify-center text-accent-success text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-semibold text-text-primary">Booking confirmed.</h3>
            <p className="text-sm text-text-secondary max-w-sm">We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <>
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[23px]">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-primary/6 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent-violet/6 blur-3xl" />
            </div>

            <div className="relative flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-success" />
                  </span>
                  <span className="text-xs font-mono text-accent-success uppercase tracking-widest">Live Availability</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary leading-tight">
                  Schedule Your Live Demo
                </h3>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-text-muted">
                  <span className="flex items-center gap-1"><Video className="w-3 h-3" /> 30 min video call</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> No commitment</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted bg-bg-tertiary/60 px-3 py-1.5 rounded-full border border-border-subtle">
                <Clock className="w-3 h-3" /> {timezoneLabel}
              </div>
            </div>

            <div className="relative">
              <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">
                Select a Day
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory pb-2 min-[480px]:grid min-[480px]:grid-cols-5 min-[480px]:overflow-visible min-[480px]:pb-0 gap-2 -mx-1 px-1 min-[480px]:mx-0 min-[480px]:px-0">
                {days.length > 0 ? (
                  days.map((day, idx) => {
                    const isSelected = selectedDay === idx

                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleDaySelect(idx)}
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className={cn(
                          "relative flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl border transition-all duration-200 cursor-pointer select-none overflow-hidden min-w-[100px] shrink-0 snap-start min-[480px]:min-w-0 min-[480px]:shrink",
                          isSelected
                            ? "border-transparent text-text-primary"
                            : "border-border-subtle bg-bg-primary/40 text-text-secondary hover:border-accent-primary/30 hover:text-text-primary hover:bg-bg-primary/70"
                        )}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="day-bg"
                            className="absolute inset-0 bg-gradient-to-b from-accent-primary/15 to-accent-violet/15"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        {isSelected && (
                          <motion.div
                            layoutId="day-border"
                            className="absolute inset-0 rounded-xl border border-accent-primary/40"
                            initial={false}
                          />
                        )}
                        <span className="relative text-[10px] font-mono opacity-60 uppercase">
                          {DAY_NAMES[day.getDay()]}
                        </span>
                        <span className={cn("relative text-xl font-bold leading-none", isSelected ? "gradient-text" : "")}>
                          {day.getDate()}
                        </span>
                        <span className="relative text-[10px] opacity-50">
                          {MONTH_NAMES[day.getMonth()]}
                        </span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="relative w-1 h-1 rounded-full bg-accent-primary"
                          />
                        )}
                      </motion.button>
                    )
                  })
                ) : (
                  Array.from({ length: 5 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-[88px] rounded-xl border border-border-subtle bg-bg-primary/40 animate-pulse min-w-[100px] shrink-0 min-[480px]:min-w-0 min-[480px]:shrink"
                    />
                  ))
                )}
              </div>
            </div>

            <p className="text-xs text-text-muted -mt-3">
              Times shown in your local timezone.
            </p>

            <AnimatePresence mode="wait">
              {selectedDay !== null && days.length > 0 && (
                <motion.div
                  key={selectedDay}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">
                    Available ·{" "}
                    <span className="text-text-secondary">
                      {DAY_NAMES[days[selectedDay].getDay()]}, {MONTH_NAMES[days[selectedDay].getMonth()]} {days[selectedDay].getDate()}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((time, idx) => {
                      const isActive = selectedTime === time

                      return (
                        <motion.button
                          key={time}
                          initial={{ opacity: 0, scale: 0.88 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.045, type: "spring", stiffness: 350, damping: 22 }}
                          onClick={() => handleTimeSelect(time)}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className={cn(
                            "relative py-2.5 px-2 rounded-lg text-sm font-medium border transition-all duration-200 overflow-hidden",
                            isActive
                              ? "border-transparent text-bg-primary font-semibold shadow-[0_0_20px_rgba(0,212,255,0.25)]"
                              : "bg-bg-primary/50 border-border-subtle text-text-secondary hover:border-accent-primary/40 hover:text-text-primary"
                          )}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="time-bg"
                              className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-violet"
                              initial={false}
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                          <span className="relative">{time}</span>
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedSlotLabel && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: -28 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 0 }}
                  exit={{ opacity: 0, height: 0, marginTop: -28 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-accent-primary/10 to-accent-violet/10 border border-accent-primary/20 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-violet/20 border border-accent-primary/20 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-accent-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-text-primary truncate">
                        {selectedSlotLabel}
                      </div>
                      <div className="text-xs text-text-muted flex items-center gap-1.5 mt-0.5">
                        <Video className="w-3 h-3" />
                        30 min · Video call · {timezoneLabel}
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-accent-success/15 border border-accent-success/30 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-accent-success" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!embedded && (
              <div className="relative flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-bg-primary/60 border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-bg-primary/60 border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Organization"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="bg-bg-primary/60 border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30 transition-all"
                  />
                </div>

                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute left-[-9999px] top-[-9999px] w-px h-px opacity-0"
                  name="website"
                />

                {submitError && (
                  <div className="text-sm text-accent-danger p-3 rounded-lg bg-accent-danger/10 border border-accent-danger/20">
                    {submitError}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleConfirmBooking}
                  disabled={!allFilled || isSubmitting}
                  className="w-full h-11 rounded-lg bg-gradient-to-r from-accent-primary to-accent-violet text-bg-primary font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  {isSubmitting ? "Confirming..." : "Confirm Booking →"}
                </button>
              </div>
            )}

            {embedded && selectedDay === null && (
              <div className="mt-auto text-center pb-2">
                <p className="text-xs text-text-muted mb-4">Pick a day above to see available slots</p>
                <div className="flex items-center justify-center gap-5">
                  {[`9 AM - 6 PM (${timezoneLabel})`, "Mon - Fri", "Video Call"].map((item) => (
                    <span key={item} className="flex items-center gap-1.5 text-xs text-text-muted">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-accent-primary to-accent-violet inline-block" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
