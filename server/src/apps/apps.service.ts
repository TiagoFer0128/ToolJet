import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { App } from './app.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';

@Injectable()
export class AppsService {

  constructor(
    @InjectRepository(App)
    private appsRepository: Repository<App>,
  ) { }

  async count(user: User) {
    return await this.appsRepository.count({ 
        where: {
            organizationId: user.organizationId,
        },
     });
  }

  async all(user: User, page: number): Promise<App[]> {

    console.log('page', page);

    return await this.appsRepository.find({
        relations: ['user'],
        where: {
            organizationId: user.organizationId,
        },
        take: 10,
        skip: 10 * ( page || 0 ),
        order: {
            createdAt: 'DESC'
        }
    });
  }
}
