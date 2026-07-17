package com.bank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*1. Find the Process ID (PID)
 * netstat -ano | findstr :8080

  Output :-
   TCP    0.0.0.0:8080           0.0.0.0:0              LISTENING       12345
   
   2. kill the process
   taskkill /PID 12345 /F
   			OR
   	npx kill-port 8080
   			

*/

@SpringBootApplication
public class BankingManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankingManagementSystemApplication.class, args);
	}
}
