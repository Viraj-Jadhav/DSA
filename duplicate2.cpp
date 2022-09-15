#include <iostream>
using namespace std;
int main()
{
    int i, count, j;
    int A[] = {1, 2, 3, 4, 5, 5, 5};

    for (i = 0; i < 6; i++)
    {
        count = 1;
        if (A[i] != -1)
            for (j = i + 1; j < 7; j++)
            {
                if (A[i] == A[j])
                {
                    count++;
                    A[j] = -1;
                }
            }
        if (count > 1)
        {
            cout << "element" << A[i] << endl;
            cout << "comes" << count << endl;
        }
    }
}