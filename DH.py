import numpy as np

def get_transformation_matrix(alpha_prev, a_prev, d, theta):
    th = np.radians(theta)
    al = np.radians(alpha_prev)
    
    ct, st = np.cos(th), np.sin(th)
    ca, sa = np.cos(al), np.sin(al)
    
    T = np.array([
        [ct,        -st,       0,      a_prev],
        [st*ca,     ct*ca,     -sa,    -sa*d],
        [st*sa,     ct*sa,     ca,     ca*d],
        [0,         0,         0,      1]
    ])
    return T

def forward_kinematics(thetas):
    t1 = thetas[0]
    t2 = thetas[1] + 90
    t3 = thetas[2] + 90
    t4 = thetas[3] + 90
    t5 = thetas[4]
    t6 = thetas[5] 

    dh_params = [
        [0,   0,   243.3, t1],
        [90,  0,   30,    t2],
        [180, 280, 20,    t3],
        [90,  0,   245,   t4],
        [90, 0,   57,    t5],
        [-90, 0,   235,   t6]
    ]
    
    T_total = np.eye(4)
    for p in dh_params:
        T_total = T_total @ get_transformation_matrix(*p)
    return T_total

home_thetas = [0, 345, 75, 0, 300, 0]
zero_thetas = [0,0,0,0,0,0]
result = forward_kinematics(zero_thetas)

print("计算结果:")
np.set_printoptions(precision=3, suppress=True)
print(result)