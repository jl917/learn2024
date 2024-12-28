import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = exception.getResponse();
    let message = 'An unexpected error occurred';

    // 기본 에러 메시지 추출
    if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    } else if (exceptionResponse && typeof exceptionResponse === 'object') {
      message = exceptionResponse['message'] || message;
    }

    // 사용자 정의 에러 응답 형식
    const errorResponse = {
      success: false,
      errorCode: status,
      errorMessage: Array.isArray(message) ? message : [message],
      timestamp: new Date().toISOString(),
    };

    response.status(status).json(errorResponse);
  }
}
