## Staircase
- The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n.
  
  Sample Input
  ```
  6
  ```

  Sample Output
  ```
       #
      ##
     ###
    ####
   #####
  ######
  ```

  Solution

  ```cs
  public static void StairCase(int n)
  {
    for (int i = 1; i <= n; i++)
    {
        for (int j = 0; j < n - i; j++)
        {
            Console.Write(" ");
        }
        for (int k = 0; k < i; k++)
        {
            Console.Write("#");
        }
        Console.WriteLine();
    }
  }
  ```
