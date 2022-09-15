#include<stdio.h>
#include<iostream>
using namespace std;
void reverse(int A[])
{
    
    int i,j;
     int B[10];
    
    
    for(i=4,j=0;i>=0;i--,j++)
    {
        B[j]=A[i];

    }
    for(i=0;i<5;i++)
    {
        A[i]=B[i];
    }
    
}
void display(int A[])
{
    int i;
    
    
    
     for(i=0;i<5;i++)
        cout<<A[i]<<endl; 
    
}
 
int main()
{
    


     
    int i;
    int A[5];
    
    // cout << "Enter number of elements: " << flush;
      //  cin >> length;
        cout << "Enter the array elements: " << endl;
        for ( i = 0; i < 5; i++)
        
            cin >> A[i];
            
        
    
    
    reverse(A);
     cout<<"reverse elements are"<<endl;
    display(A);
    

    

     
    return 0;

    

}
