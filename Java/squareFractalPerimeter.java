import java.text.DecimalFormat;
import java.util.Scanner; 

public class squareFractalPerimeter{
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
			System.out.println("Perimeters for Koch's Square Fractal: "); 

			while(currentTerm<terms){
				double answer = (float)5/3*lastPerimeter;
				DecimalFormat df = new DecimalFormat("#.##");
				Double finalans = Double.parseDouble(df.format(answer))*1; 
				System.out.println("Iteration " + currentTerm + " = " + finalans);  
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