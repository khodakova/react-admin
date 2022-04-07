import {User} from '@src/models/User';

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}
