"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { TimePickerDemo } from "./time-picker";
import { cn } from "~/lib/utils";

export function DateTimePicker({
  value,
  setValue,
}: {
  value: Date;
  setValue: React.Dispatch<any>;
}) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start bg-popover text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP HH:mm:ss") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto  p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
        <div className="border-t border-border p-3">
          <TimePickerDemo
            setDate={(date) => {
              setValue(date);
              setDate(date);
            }}
            date={date}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
