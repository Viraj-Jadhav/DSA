#include<stdio.h>
#include<iostream>
using namespace std;
int reverse(int A[],int n)
{
    
    int i,j;
     int B[n];
    
    
    for(i=n-1,j=0;i>=0;i--,j++)
    {
        B[j]=A[i];

    }
    for(i=0;i<n;i++)
    {
        A[i]=B[i];
    }
    for(i=0;i<n;i++)
    {
        cout<<A[i]<<" "<<endl;
    }
    return 0;
    
}

 
int main()
{
    


     
    int i,n;
    
    
     cout << "Enter number of elements: " << endl;
     cin >> n;
     int A[n];
        cout << "Enter the array elements: " << endl;
        for ( i = 0; i < n; i++)
        
            cin >> A[i];
        cout<<"Array is"<<endl;    
        for ( i = 0; i < n; i++)
        
            cout<<A[i]<<endl;
            
        cout<<"reverse array"<<endl;
    
    
      reverse(A,n);
     

    

    

     
    return 0;

    

}
