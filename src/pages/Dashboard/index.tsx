import React, { useState, useCallback } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  const handleDateChanged = useCallback(
    (day: Date, modifiers: DayModifiers) => {
      if (modifiers.available) {
        setSelectedDate(day);
      }
    },
    [],
  );

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/15067098?s=460&u=937ff779f5b702ee7cfc32da353fa97de9ecf252&v=4"
                alt="Douglas Fuelber"
              />
              <strong>Douglas Fuelber</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/15067098?s=460&u=937ff779f5b702ee7cfc32da353fa97de9ecf252&v=4"
                  alt="Douglas Fuelber"
                />
                <strong>Douglas Fuelber</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/15067098?s=460&u=937ff779f5b702ee7cfc32da353fa97de9ecf252&v=4"
                  alt="Douglas Fuelber"
                />
                <strong>Douglas Fuelber</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/15067098?s=460&u=937ff779f5b702ee7cfc32da353fa97de9ecf252&v=4"
                  alt="Douglas Fuelber"
                />
                <strong>Douglas Fuelber</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar>
          <DayPicker
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            fromMonth={new Date()}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
            onDayClick={handleDateChanged}
            selectedDays={[selectedDate]}
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
