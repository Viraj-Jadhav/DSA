#include <stdio.h>
#include <iostream>
using namespace std;
int reverse(int A[])
{
    int i, j, temp;
    for (i = 0, j = 4; i < j; i++, j--)
    {
        temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
    for (i = 0; i < 5; i++)
    {
        cout << A[i] << endl;
    }

    return 0;
}
int main()
{
    int A[5] = {2, 5, 4, 6, 7};
    cout << reverse(A) << endl;
}