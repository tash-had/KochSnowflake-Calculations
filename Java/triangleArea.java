import java.util.Scanner; 
import java.lang.Math;

public class triangleArea{
	public static void main(String args[]){
		Boolean goAgain = true;
		
		System.out.println("This program will assist in calculating area for Koch's Snowflake"); 
		while(goAgain){

			Scanner input = new Scanner(System.in); 
			System.out.println("Please enter the area for the first iteration "); 
			double lastArea = input.nextDouble(); 
			System.out.println("Please enter the amount of iterations you'd like"); 
			int terms = input.nextInt(); 
			int n = 0; 
			double area = 0;
			double areaSum = 0;  
			System.out.println("");
			System.out.println("Area's for Koch's Triangle with inital area of " + lastArea);
			System.out.println("");
			System.out.println("Iteration 1 = " + lastArea);

			while(n<terms){
				area = lastArea + (float)1/3 * (Math.pow((float)4/9, n) + areaSum);
				areaSum = areaSum + Math.pow(((float)4/9), n);
				int count = n + 2; 
				System.out.println("Iteration " + count + " = " + area); 
				n++; 
			}
			
			System.out.println("");
			System.out.println("Go Again? Y/N"); 
			String loopCheck = input.next(); 
			
			if(loopCheck.equals("N")){
				goAgain = false; 
			}
		}
	}
}