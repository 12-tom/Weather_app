export type Quote = {
    id: number;
    quote: string;
    author: string;
}

export type Weather = {
    current: {
        temp_c: number;
        temp_f: number;
        feelslike_c: number;
        feelslike_f: number;
        humidity: number;
        precip_mm: number;
        wind_kph: number;
        pressure_in: number;
        condition: {
            text: string;
            icon: string;
        }
    };
    location: {
        name: string;
        localtime: any;
    };
    forecast: {
        forecastday: {
            date: string;
            astro: {
                sunrise: string;
                sunset: string;
                moonrise: string;
                moonset: string;
            }
            day: {
                condition: {
                    text: string;
                    icon: string;
                }
            }
        }[];
    };
}

export type Population = {
    error: boolean;
    msg: string;
    data: {
        city: string;
        populationCounts: [
            {
                value: number;
                year: number;
            }
        ];
    };
};

export type Message = {
    msg: string;
};

export type Err = {
    error: {
        message: string;
    }
}
