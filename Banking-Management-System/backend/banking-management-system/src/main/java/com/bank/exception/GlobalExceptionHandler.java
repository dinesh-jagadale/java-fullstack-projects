package com.bank.exception;

import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.validation.FieldError;
import org.springframework.web.ErrorResponseException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleResourceNotFound(ResourceNotFoundException ex) {

        ProblemDetail problem = ProblemDetail.forStatus(HttpStatus.NOT_FOUND);

        problem.setTitle("Resource Not Found");
        problem.setDetail(ex.getMessage());

        problem.setProperty("timestamp", LocalDateTime.now());

        return problem;
    }

    @ExceptionHandler(DuplicateResourceException.class)
    public ProblemDetail handleDuplicateResource(DuplicateResourceException ex) {

        ProblemDetail problem = ProblemDetail.forStatus(HttpStatus.CONFLICT);

        problem.setTitle("Duplicate Resource");
        problem.setDetail(ex.getMessage());

        problem.setProperty("timestamp", LocalDateTime.now());

        return problem;
    }

    @ExceptionHandler(BadRequestException.class)
    public ProblemDetail handleBadRequest(BadRequestException ex) {

        ProblemDetail problem = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);

        problem.setTitle("Bad Request");
        problem.setDetail(ex.getMessage());

        problem.setProperty("timestamp", LocalDateTime.now());

        return problem;
    }

    @ExceptionHandler(UnauthorizedException.class)
    public ProblemDetail handleUnauthorized(UnauthorizedException ex) {

        ProblemDetail problem = ProblemDetail.forStatus(HttpStatus.UNAUTHORIZED);

        problem.setTitle("Unauthorized");

        problem.setDetail(ex.getMessage());

        problem.setProperty("timestamp", LocalDateTime.now());

        return problem;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ProblemDetail handleValidationException(
            MethodArgumentNotValidException ex) {

        ProblemDetail problem =
                ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);

        problem.setTitle("Validation Failed");

        Map<String, String> errors = new LinkedHashMap<>();

        for (FieldError error : ex.getBindingResult().getFieldErrors()) {

            errors.put(error.getField(), error.getDefaultMessage());
        }

        problem.setDetail("One or more validation errors occurred.");

        problem.setProperty("errors", errors);

        problem.setProperty("timestamp", LocalDateTime.now());

        return problem;
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ProblemDetail handleConstraintViolation(
            ConstraintViolationException ex) {

        ProblemDetail problem =
                ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);

        problem.setTitle("Constraint Violation");

        problem.setDetail(ex.getMessage());

        problem.setProperty("timestamp", LocalDateTime.now());

        return problem;
    }

    @ExceptionHandler(ErrorResponseException.class)
    public ProblemDetail handleErrorResponse(ErrorResponseException ex) {

        HttpStatusCode status = ex.getStatusCode();

        ProblemDetail problem =
                ProblemDetail.forStatus(status);

        problem.setTitle(status.toString());

        problem.setDetail(ex.getBody().getDetail());

        problem.setProperty("timestamp", LocalDateTime.now());

        return problem;
    }

    @ExceptionHandler(Exception.class)
    public ProblemDetail handleGenericException(Exception ex) {

        ProblemDetail problem =
                ProblemDetail.forStatus(HttpStatus.INTERNAL_SERVER_ERROR);

        problem.setTitle("Internal Server Error");

        problem.setDetail(ex.getMessage());

        problem.setProperty("timestamp", LocalDateTime.now());

        return problem;
    }

}