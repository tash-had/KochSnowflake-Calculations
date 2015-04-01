
import java.util.Scanner; 

public class completeKochCalc {
	static Scanner input = new Scanner(System.in);


	public static void main(String args[]){
		modeSelect(); 
	}

	private static void modeSelect() {

		System.out.println("");
		System.out.println("Welcome to Koch Calculator! Please enter a letter...");
		System.out.println("A - Triangle Fractal Area");
		System.out.println("a - Triangle Fractal Perimeter");
		System.out.println("B - Square Fractal Area");
		System.out.println("b - Square Fractal Perimeter");
		System.out.println("");
		String choice = input.next(); 
		String calcOpt1 = "triangle"; 
		String calcOpt2 = "square"; 
		
		switch(choice){
		case "A": 
			area(calcOpt1);
			break; 
		
		case "a": 
			perimeter(calcOpt1);
			break; 
			
		case "B": 
			area(calcOpt2);
			break;
		
		case "b": 
			perimeter(calcOpt2);
			break;
		}
	}
	
	public static void perimeter(String shape) {
		String fractalName = null;
		int terms;
		double lastPerimeter;
		int currentTerm = 1;
		float cRatioNum = (float) 4/3;


		if(shape.equals("triangle")) {
			fractalName = "Triangle";
		}

		else if(shape.equals("square")){
			fractalName = "Square";
			cRatioNum = (float) 5/3;
		}


		System.out.println("What is the perimeter for the first iteration?");
		lastPerimeter = input.nextDouble();
		System.out.println("How many iterations would you like?");
		terms = input.nextInt();
		if(terms==1){
			System.out.println("Sorry, you must know the perimeter for the first iteration. Press enter to retry");
			input.next();
			perimeter(fractalName);
		}
		System.out.println("");
		System.out.println("Perimeters for Koch's " + fractalName + " Fractal with initial perimeter of " + lastPerimeter + " units");
		System.out.println("");

		while(currentTerm<terms){
			double answer = cRatioNum*lastPerimeter;
			System.out.println("Iteration " + currentTerm + " = " + answer);
			lastPerimeter = answer;
			currentTerm++;
		}
		System.out.println("");
		System.out.println("Enter any letter to return to menu.");
		input.next();
		modeSelect();
	}

	public static void area(String shape) {
		String fractalName = null;
		System.out.println("Please enter the area for the first iteration ");
		double lastArea = input.nextDouble();
		System.out.println("Please enter the amount of iterations you would like");
		int terms = input.nextInt();
		int currentTerm = 0;
		double area;
		double areaSum = 0;
		int num = 0;
		int deNum = 0;

		if(shape.equals("triangle")){
			fractalName = "Triangle";
			num = 4;
			deNum = 3;
		}

		else if(shape.equals("square")){
			fractalName = "Square";
			num = 5;
			deNum = 4;
		}

		System.out.println("");
		System.out.println("Area's for Koch's " + fractalName + " Fractal with initial area of " + lastArea);
		System.out.println("");
		System.out.println("Iteration 1 = " + lastArea);

		while(currentTerm<terms){
			area = lastArea + (float)1/deNum * (Math.pow((float)num/9, currentTerm) + areaSum);
			areaSum = areaSum + Math.pow(((float)num/9), currentTerm);
			int count = currentTerm + 2;
			System.out.println("Iteration " + count + " = " + area);
			currentTerm++;
		}

		System.out.println("");
		System.out.println("Enter any letter to return to menu.");
		input.next();
		modeSelect();
	}
}
