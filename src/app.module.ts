import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FingerprintModule } from './fingerprint/fingerprint.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BssidModule } from './bssid/bssid.module';

@Module({
  imports: [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: +configService.get<number>('DATABASE_PORT'),
      username: configService.get('DATABASE_USERNAME'),
      password: configService.get('DATABASE_PASSWORD'),
      database: "skripsi",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
      autoLoadEntities: true,
      charset: 'utf8mb4_unicode_ci',
    }),
    inject: [ConfigService],
  }),
  FingerprintModule,
  BssidModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
