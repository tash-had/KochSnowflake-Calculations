import java.text.DecimalFormat;
import java.util.Scanner; 

public class trianlePerimeter{
	public static void main(String args[]){
		Boolean goAgain = true; 

		while(goAgain){
			int currentTerm = 1; 
			Scanner input = new Scanner(System.in);
			System.out.println("How many iterations do you want? "); 
			int terms = input.nextInt();

			while(terms<2){
				System.out.println("You must know the perimeter for the first iteration.");
				System.out.println("How many iterations do you want? "); 
				terms = input.nextInt(); 
			}

			System.out.println("What is the perimeter of the first iteration? "); 
			double lastPerimeter = input.nextInt(); 
			System.out.println("");
			System.out.println("Perimeters for Koch's Triangle Fractal with initial perimeter of " + lastPerimeter); 

			while(currentTerm<terms){
				double answer = (float)4/3*lastPerimeter;
			//	DecimalFormat df = new DecimalFormat("#.##");      //It seems that formatting the decimal ends up interfering with values of Infinity. 
			//	Double finalans = Double.parseDouble(df.format(answer)); 
				System.out.println("Iteration " + currentTerm + " = " + answer);  
				lastPerimeter = answer; 
				currentTerm ++; 
			}
			
			System.out.println("Go again? Press key Y/N"); 
			String loopCheck = input.next(); 

			if(loopCheck.equals("N")){
				goAgain = false; 
			}
		}
	}
}