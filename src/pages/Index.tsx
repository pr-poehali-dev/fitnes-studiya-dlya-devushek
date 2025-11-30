import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Грация</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'services', 'trainers', 'schedule', 'pricing', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О студии'}
                  {section === 'services' && 'Услуги'}
                  {section === 'trainers' && 'Тренеры'}
                  {section === 'schedule' && 'Расписание'}
                  {section === 'pricing' && 'Прайс'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90">Записаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Женская фитнес-студия</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Забота о вашем<br />теле и здоровье
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Персональные тренировки, массаж, групповые занятия и реабилитация после травм в уютной атмосфере
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на пробное занятие
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" size={20} className="mr-2" />
                Виртуальный тур
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Актуальные предложения</Badge>
            <h3 className="text-4xl font-bold mb-4">Специальные акции</h3>
            <p className="text-muted-foreground">Не упустите выгодные предложения этого месяца</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Первое занятие бесплатно',
                description: 'Попробуйте любое направление студии совершенно бесплатно',
                discount: 'Новым клиентам',
                color: 'bg-purple-100',
                icon: 'Gift'
              },
              {
                title: 'Абонемент 10 занятий',
                description: 'Групповые занятия со скидкой 30% при покупке абонемента',
                discount: '-30%',
                color: 'bg-pink-100',
                icon: 'Ticket'
              },
              {
                title: 'Массаж + тренировка',
                description: 'Персональная тренировка и массаж в комплексе со скидкой',
                discount: '-25%',
                color: 'bg-green-100',
                icon: 'Sparkles'
              }
            ].map((offer, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader className={offer.color}>
                  <div className="flex justify-between items-start mb-2">
                    <Icon name={offer.icon as any} size={32} className="text-primary" />
                    <Badge className="bg-white text-primary">{offer.discount}</Badge>
                  </div>
                  <CardTitle>{offer.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base">{offer.description}</CardDescription>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Узнать подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary text-primary-foreground">О нас</Badge>
              <h3 className="text-4xl font-bold mb-6">Студия заботы о женском здоровье</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Мы создали пространство, где каждая женщина может найти свой путь к здоровью и гармонии.
                Наши тренеры имеют медицинское образование и опыт работы с реабилитацией.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Users', text: 'Более 500 довольных клиенток' },
                  { icon: 'Award', text: 'Сертифицированные специалисты' },
                  { icon: 'Heart', text: 'Индивидуальный подход к каждой' },
                  { icon: 'Shield', text: 'Безопасные тренировки' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-full">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl h-96 overflow-hidden animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/24d10bc2-ed3f-4be7-9e8a-13b46b3c0e4f/files/067003f6-9304-429a-a571-c616eb42269c.jpg" 
                alt="Групповые занятия в студии" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Наши услуги</Badge>
            <h3 className="text-4xl font-bold mb-4">Что мы предлагаем</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для поддержания вашего здоровья и красоты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Dumbbell',
                title: 'Персональные тренировки',
                description: 'Индивидуальная программа под ваши цели и особенности организма',
                color: 'bg-purple-100'
              },
              {
                icon: 'Hand',
                title: 'Массаж',
                description: 'Расслабляющий, спортивный и восстановительный массаж',
                color: 'bg-pink-100'
              },
              {
                icon: 'Users',
                title: 'Групповые занятия',
                description: 'Йога, пилатес, растяжка и функциональные тренировки',
                color: 'bg-green-100'
              },
              {
                icon: 'HeartPulse',
                title: 'Реабилитация',
                description: 'Восстановление после травм под контролем специалистов',
                color: 'bg-yellow-100'
              }
            ].map((service, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-lg transition-all hover:-translate-y-1" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader className={service.color}>
                  <Icon name={service.icon as any} size={48} className="text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-primary-foreground">Команда</Badge>
            <h3 className="text-4xl font-bold mb-4">Наши тренеры</h3>
            <p className="text-muted-foreground">Профессионалы с медицинским образованием и большим опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Петрова',
                role: 'Персональный тренер',
                specialization: 'Функциональный тренинг, реабилитация',
                experience: '8 лет опыта'
              },
              {
                name: 'Мария Сидорова',
                role: 'Инструктор йоги',
                specialization: 'Хатха-йога, пилатес',
                experience: '6 лет опыта'
              },
              {
                name: 'Елена Иванова',
                role: 'Массажист',
                specialization: 'Спортивный и расслабляющий массаж',
                experience: '10 лет опыта'
              }
            ].map((trainer, idx) => (
              <Card key={idx} className="animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardHeader>
                  <div className="w-full h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                    <Icon name="User" size={80} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{trainer.name}</CardTitle>
                  <Badge className="w-fit bg-secondary text-secondary-foreground">{trainer.role}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{trainer.specialization}</p>
                    <p className="text-sm font-medium text-primary">{trainer.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Расписание</Badge>
            <h3 className="text-4xl font-bold mb-4">Групповые занятия</h3>
            <p className="text-muted-foreground">Выберите удобное время для тренировок</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {[
              { day: 'Понедельник', time: '10:00', class: 'Йога для начинающих' },
              { day: 'Понедельник', time: '18:00', class: 'Функциональный тренинг' },
              { day: 'Среда', time: '10:00', class: 'Пилатес' },
              { day: 'Среда', time: '19:00', class: 'Растяжка' },
              { day: 'Пятница', time: '10:00', class: 'Йога' },
              { day: 'Пятница', time: '18:00', class: 'Групповая тренировка' }
            ].map((item, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-md transition-shadow" style={{ animationDelay: `${idx * 0.05}s` }}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{item.day}</p>
                    <p className="text-2xl font-bold text-primary">{item.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">{item.class}</p>
                    <Button size="sm" className="mt-2 bg-primary hover:bg-primary/90">Записаться</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-primary-foreground">Стоимость</Badge>
            <h3 className="text-4xl font-bold mb-4">Прайс-лист</h3>
            <p className="text-muted-foreground">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Разовое посещение',
                price: '1 500',
                features: ['Одно групповое занятие', 'Доступ в раздевалку', 'Консультация тренера']
              },
              {
                title: 'Абонемент',
                price: '10 000',
                features: ['10 групповых занятий', 'Скидка 30%', 'Заморозка до 14 дней', 'Приоритетная запись'],
                popular: true
              },
              {
                title: 'Персональная',
                price: '3 000',
                features: ['Индивидуальная программа', 'Онлайн поддержка', 'Контроль питания']
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`animate-scale-in hover:shadow-xl transition-all ${plan.popular ? 'border-2 border-primary scale-105' : ''}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-xl font-medium">
                    Популярный выбор
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Контакты</Badge>
            <h3 className="text-4xl font-bold mb-4">Как нас найти</h3>
            <p className="text-muted-foreground">Мы всегда рады видеть вас в нашей студии</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <div className="flex gap-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 15</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Время работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 8:00 - 22:00<br />Сб-Вс: 9:00 - 21:00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-yellow-100 rounded-xl">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@graciastudio.ru</p>
                </div>
              </div>
            </div>
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Записаться на занятие</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Комментарий"
                  rows={4}
                  className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Грация</h2>
          <p className="text-muted-foreground mb-6">Фитнес-студия для заботы о женском здоровье</p>
          <div className="flex justify-center gap-4 mb-6">
            {['Instagram', 'Facebook', 'Youtube'].map((social) => (
              <Button key={social} variant="outline" size="icon" className="rounded-full">
                <Icon name={social === 'Instagram' ? 'Instagram' : social === 'Facebook' ? 'Facebook' : 'Youtube'} size={20} />
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Грация. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;