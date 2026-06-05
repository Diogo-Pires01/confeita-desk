import { useState } from 'react';
import MonthCalendar from '../../components/agenda/MonthCalendar';
import DayDetail from '../../components/agenda/DayDetail';
import { NewOrderButton } from '../../components/NewOrderButton';
import { useOrders } from '../../hooks/useOrders';

export default function Agenda() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { orders, loading } = useOrders();

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else setMonth((m) => m - 1);
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else setMonth((m) => m + 1);
  };

  const handleToday = () => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth());
    setSelectedDate(today.toISOString().split('T')[0]!);
  };

  if (loading) return <p className="text-dash-text-muted">Carregando...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-dash-text-main">
          Agenda
        </h1>
        <NewOrderButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-4">
        <MonthCalendar
          year={year}
          month={month}
          orders={orders}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          onPrev={handlePrev}
          onNext={handleNext}
          onToday={handleToday}
        />
        <DayDetail date={selectedDate} orders={orders} />
      </div>
    </div>
  );
}
