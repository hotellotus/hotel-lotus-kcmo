/*
 * Hotel Lotus KCMO — Booking Calendar Component
 * Design: Interactive calendar with room selection and price display
 * Features: Date picker, room type selector, guest count, real-time availability
 */

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface Room {
  id: string;
  name: string;
  code: string;
  pricePerNight: number;
  maxGuests: number;
  image: string;
}

const rooms: Room[] = [
  {
    id: "hrk",
    name: "ADA Rolling Shower King",
    code: "HRK",
    pricePerNight: 89,
    maxGuests: 2,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/room_new1_17d43785.png",
  },
  {
    id: "1q",
    name: "Standard Queen",
    code: "1Q",
    pricePerNight: 79,
    maxGuests: 2,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/room_new2_085b32d2.png",
  },
  {
    id: "kg",
    name: "Standard King",
    code: "KG",
    pricePerNight: 85,
    maxGuests: 2,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/KGFINAL_46bfef49.png",
  },
  {
    id: "qs",
    name: "Queen Suite",
    code: "QS",
    pricePerNight: 129,
    maxGuests: 4,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/room_new4_39e895a4.png",
  },
  {
    id: "2q",
    name: "Two Queen Beds",
    code: "2Q",
    pricePerNight: 119,
    maxGuests: 4,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485914975/f2abkxuerf7nGEYaLJXkNE/room_new5_8b28c4b0.png",
  },
];

export default function BookingCalendar() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string>("1q");
  const [guests, setGuests] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showRoomSelector, setShowRoomSelector] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate total price
  const totalPrice = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const room = rooms.find((r) => r.id === selectedRoom);
    if (!room) return 0;
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(nights, 1) * room.pricePerNight;
  }, [checkIn, checkOut, selectedRoom]);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    return Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  }, [currentMonth]);

  const isDateInRange = (date: Date) => {
    if (!checkIn || !checkOut) return false;
    return date >= checkIn && date <= checkOut;
  };

  const isDateStart = (date: Date) => {
    if (!checkIn) return false;
    return date.toDateString() === checkIn.toDateString();
  };

  const isDateEnd = (date: Date) => {
    if (!checkOut) return false;
    return date.toDateString() === checkOut.toDateString();
  };

  const handleDateClick = (date: Date) => {
    if (date < today) return;

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else if (date < checkIn) {
      setCheckIn(date);
      setCheckOut(null);
    } else {
      setCheckOut(date);
    }
  };

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates");
      return;
    }
    if (nights < 1) {
      toast.error("Please select valid dates");
      return;
    }
    const room = rooms.find((r) => r.id === selectedRoom);
    if (!room) return;

    const hotelKeyUrl = 'https://booking.hotelkeyapp.com/#/booking/search?pc=0689&property_id=8e221710-3e95-455c-9e0e-9c50a862f01b&url=http%3A%2F%2Fwww.lotuskcmo.com%2F';
    window.open(hotelKeyUrl, '_blank');
  };

  const selectedRoomData = rooms.find((r) => r.id === selectedRoom);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-8">
        {/* Calendar Section */}
        <div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3
              className="text-[oklch(0.12_0_0)] text-xl font-semibold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Select Your Dates
            </h3>

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="p-2 hover:bg-[oklch(0.93_0.005_85)] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[oklch(0.73_0.12_85)]" />
              </button>
              <h4
                className="text-[oklch(0.12_0_0)] font-semibold text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </h4>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="p-2 hover:bg-[oklch(0.93_0.005_85)] transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[oklch(0.73_0.12_85)]" />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-[oklch(0.50_0.01_65)] py-2"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((date, idx) => {
                if (!date) {
                  return <div key={`empty-${idx}`} className="aspect-square" />;
                }

                const isDisabled = date < today;
                const inRange = isDateInRange(date);
                const isStart = isDateStart(date);
                const isEnd = isDateEnd(date);
                const isToday = date.toDateString() === today.toDateString();

                return (
                  <button
                    key={date.toDateString()}
                    onClick={() => handleDateClick(date)}
                    disabled={isDisabled}
                    className={`aspect-square rounded-lg text-sm font-semibold transition-all ${
                      isDisabled
                        ? "bg-[oklch(0.93_0.005_85)] text-[oklch(0.80_0.005_85)] cursor-not-allowed"
                        : isStart || isEnd
                          ? "bg-[oklch(0.73_0.12_85)] text-[oklch(0.08_0_0)]"
                          : inRange
                            ? "bg-[oklch(0.82_0.10_85)] text-[oklch(0.08_0_0)]"
                            : isToday
                              ? "border-2 border-[oklch(0.73_0.12_85)] text-[oklch(0.12_0_0)]"
                              : "bg-white text-[oklch(0.12_0_0)] hover:bg-[oklch(0.93_0.005_85)]"
                    }`}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            {/* Selected Dates Display */}
            {checkIn && checkOut && (
              <div className="mt-6 p-4 bg-[oklch(0.97_0.005_85)] border border-[oklch(0.88_0.005_85)] rounded-lg">
                <p
                  className="text-[oklch(0.12_0_0)] text-sm mb-2"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 500 }}
                >
                  Selected Dates:
                </p>
                <p
                  className="text-[oklch(0.73_0.12_85)] font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {checkIn.toLocaleDateString()} - {checkOut.toLocaleDateString()}
                </p>
                <p
                  className="text-[oklch(0.50_0.01_65)] text-xs mt-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {nights} night{nights > 1 ? "s" : ""}
                </p>
                <button
                  onClick={handleBooking}
                  className="mt-4 w-full py-3 text-xs font-bold tracking-widest uppercase transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "oklch(0.73 0.12 85)",
                    color: "oklch(0.08 0 0)",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                  }}
                >
                  <Check className="w-4 h-4 inline mr-2" />
                  Book Now
                </button>
              </div>
            )}

            {/* Book Now Button - when no dates selected */}
            {(!checkIn || !checkOut) && (
              <button
                disabled
                className="mt-6 w-full py-3 text-xs font-bold tracking-widest uppercase transition-all opacity-50 cursor-not-allowed"
                style={{
                  backgroundColor: "oklch(0.73 0.12 85)",
                  color: "oklch(0.08 0 0)",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                }}
              >
                <Check className="w-4 h-4 inline mr-2" />
                Select Dates to Book
              </button>
            )}
          </div>
        </div>


      </div>
    </div>
  );
}
