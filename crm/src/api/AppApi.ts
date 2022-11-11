import {HttpService} from "../services/HttpService";
import {AuthDataDto} from "../common/dto/AuthDataDto";
import {TokenDto} from "../common/dto/TokenDto";


class AppApi extends HttpService {
    login(authData: AuthDataDto): Promise<TokenDto> {
        return this.post('login', authData)
    }

}

export default new AppApi()