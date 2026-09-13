"use client";

interface DateRangePickerProps {
  checkIn: string;
  checkOut: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
}

const DateRangePicker = ({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
}: DateRangePickerProps) => {
  return (
    <div className="mb-3 grid grid-cols-2 gap-2">
      <label className="flex flex-col text-xs text-gray-600">
        Entrada
        <input
          type="date"
          value={checkIn}
          onChange={(e) => onCheckInChange(e.target.value)}
          className="mt-1 rounded-lg border border-gray-300 px-2 py-2 text-sm outline-none"
        />
      </label>
      <label className="flex flex-col text-xs text-gray-600">
        Salida
        <input
          type="date"
          value={checkOut}
          min={checkIn || undefined}
          onChange={(e) => onCheckOutChange(e.target.value)}
          className="mt-1 rounded-lg border border-gray-300 px-2 py-2 text-sm outline-none"
        />
      </label>
    </div>
  );
};

export default DateRangePicker;